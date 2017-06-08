/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2756Component } from './comp-2756.component';

describe('Comp2756Component', () => {
  let component: Comp2756Component;
  let fixture: ComponentFixture<Comp2756Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2756Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2756Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
