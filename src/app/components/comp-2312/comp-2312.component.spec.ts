/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2312Component } from './comp-2312.component';

describe('Comp2312Component', () => {
  let component: Comp2312Component;
  let fixture: ComponentFixture<Comp2312Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2312Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2312Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
