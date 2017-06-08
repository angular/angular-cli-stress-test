/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4203Component } from './comp-4203.component';

describe('Comp4203Component', () => {
  let component: Comp4203Component;
  let fixture: ComponentFixture<Comp4203Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4203Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4203Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
