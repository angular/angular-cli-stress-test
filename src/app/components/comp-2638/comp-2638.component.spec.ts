/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2638Component } from './comp-2638.component';

describe('Comp2638Component', () => {
  let component: Comp2638Component;
  let fixture: ComponentFixture<Comp2638Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2638Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2638Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
