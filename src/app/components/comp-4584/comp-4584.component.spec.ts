/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4584Component } from './comp-4584.component';

describe('Comp4584Component', () => {
  let component: Comp4584Component;
  let fixture: ComponentFixture<Comp4584Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4584Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4584Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
