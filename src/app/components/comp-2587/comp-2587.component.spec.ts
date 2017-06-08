/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2587Component } from './comp-2587.component';

describe('Comp2587Component', () => {
  let component: Comp2587Component;
  let fixture: ComponentFixture<Comp2587Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2587Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2587Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
