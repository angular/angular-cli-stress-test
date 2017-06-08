/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp648Component } from './comp-648.component';

describe('Comp648Component', () => {
  let component: Comp648Component;
  let fixture: ComponentFixture<Comp648Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp648Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp648Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
