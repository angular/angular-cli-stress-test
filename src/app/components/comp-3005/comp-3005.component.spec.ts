/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3005Component } from './comp-3005.component';

describe('Comp3005Component', () => {
  let component: Comp3005Component;
  let fixture: ComponentFixture<Comp3005Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3005Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3005Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
