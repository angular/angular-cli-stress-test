/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp875Component } from './comp-875.component';

describe('Comp875Component', () => {
  let component: Comp875Component;
  let fixture: ComponentFixture<Comp875Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp875Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp875Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
