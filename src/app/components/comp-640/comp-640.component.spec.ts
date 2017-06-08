/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp640Component } from './comp-640.component';

describe('Comp640Component', () => {
  let component: Comp640Component;
  let fixture: ComponentFixture<Comp640Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp640Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp640Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
