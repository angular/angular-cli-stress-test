/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp3988Component } from './comp-3988.component';

describe('Comp3988Component', () => {
  let component: Comp3988Component;
  let fixture: ComponentFixture<Comp3988Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp3988Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp3988Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
