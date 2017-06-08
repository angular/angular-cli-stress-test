/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3209Component } from './comp-3209.component';

describe('Comp3209Component', () => {
  let component: Comp3209Component;
  let fixture: ComponentFixture<Comp3209Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3209Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3209Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
