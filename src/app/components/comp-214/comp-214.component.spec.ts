/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp214Component } from './comp-214.component';

describe('Comp214Component', () => {
  let component: Comp214Component;
  let fixture: ComponentFixture<Comp214Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp214Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp214Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
