/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp256Component } from './comp-256.component';

describe('Comp256Component', () => {
  let component: Comp256Component;
  let fixture: ComponentFixture<Comp256Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp256Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp256Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
