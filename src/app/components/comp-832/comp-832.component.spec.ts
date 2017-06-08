/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp832Component } from './comp-832.component';

describe('Comp832Component', () => {
  let component: Comp832Component;
  let fixture: ComponentFixture<Comp832Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp832Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp832Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
