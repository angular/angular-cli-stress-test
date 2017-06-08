/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp230Component } from './comp-230.component';

describe('Comp230Component', () => {
  let component: Comp230Component;
  let fixture: ComponentFixture<Comp230Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp230Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp230Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
