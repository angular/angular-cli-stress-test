/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp203Component } from './comp-203.component';

describe('Comp203Component', () => {
  let component: Comp203Component;
  let fixture: ComponentFixture<Comp203Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp203Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp203Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
