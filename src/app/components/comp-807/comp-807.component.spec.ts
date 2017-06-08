/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp807Component } from './comp-807.component';

describe('Comp807Component', () => {
  let component: Comp807Component;
  let fixture: ComponentFixture<Comp807Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp807Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp807Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
