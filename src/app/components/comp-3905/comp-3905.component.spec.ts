/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3905Component } from './comp-3905.component';

describe('Comp3905Component', () => {
  let component: Comp3905Component;
  let fixture: ComponentFixture<Comp3905Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3905Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3905Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
