/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp988Component } from './comp-988.component';

describe('Comp988Component', () => {
  let component: Comp988Component;
  let fixture: ComponentFixture<Comp988Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp988Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp988Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
