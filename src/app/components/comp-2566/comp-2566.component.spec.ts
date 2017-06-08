/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2566Component } from './comp-2566.component';

describe('Comp2566Component', () => {
  let component: Comp2566Component;
  let fixture: ComponentFixture<Comp2566Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2566Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2566Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
