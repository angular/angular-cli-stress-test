/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4337Component } from './comp-4337.component';

describe('Comp4337Component', () => {
  let component: Comp4337Component;
  let fixture: ComponentFixture<Comp4337Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4337Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4337Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
