/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp147Component } from './comp-147.component';

describe('Comp147Component', () => {
  let component: Comp147Component;
  let fixture: ComponentFixture<Comp147Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp147Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp147Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
