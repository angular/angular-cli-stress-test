/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3785Component } from './comp-3785.component';

describe('Comp3785Component', () => {
  let component: Comp3785Component;
  let fixture: ComponentFixture<Comp3785Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3785Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3785Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
