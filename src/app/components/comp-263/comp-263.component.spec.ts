/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp263Component } from './comp-263.component';

describe('Comp263Component', () => {
  let component: Comp263Component;
  let fixture: ComponentFixture<Comp263Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp263Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp263Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
