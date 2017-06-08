/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp962Component } from './comp-962.component';

describe('Comp962Component', () => {
  let component: Comp962Component;
  let fixture: ComponentFixture<Comp962Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp962Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp962Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
