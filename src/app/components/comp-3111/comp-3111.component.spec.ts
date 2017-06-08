/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3111Component } from './comp-3111.component';

describe('Comp3111Component', () => {
  let component: Comp3111Component;
  let fixture: ComponentFixture<Comp3111Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3111Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3111Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
