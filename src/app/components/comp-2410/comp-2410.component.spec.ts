/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2410Component } from './comp-2410.component';

describe('Comp2410Component', () => {
  let component: Comp2410Component;
  let fixture: ComponentFixture<Comp2410Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2410Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2410Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
