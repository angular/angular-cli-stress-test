/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2720Component } from './comp-2720.component';

describe('Comp2720Component', () => {
  let component: Comp2720Component;
  let fixture: ComponentFixture<Comp2720Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2720Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2720Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
