/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4994Component } from './comp-4994.component';

describe('Comp4994Component', () => {
  let component: Comp4994Component;
  let fixture: ComponentFixture<Comp4994Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4994Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4994Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
