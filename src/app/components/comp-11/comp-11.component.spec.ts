/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp11Component } from './comp-11.component';

describe('Comp11Component', () => {
  let component: Comp11Component;
  let fixture: ComponentFixture<Comp11Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp11Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp11Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
