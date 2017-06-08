/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2786Component } from './comp-2786.component';

describe('Comp2786Component', () => {
  let component: Comp2786Component;
  let fixture: ComponentFixture<Comp2786Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2786Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2786Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
