/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp2601Component } from './comp-2601.component';

describe('Comp2601Component', () => {
  let component: Comp2601Component;
  let fixture: ComponentFixture<Comp2601Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp2601Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp2601Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
