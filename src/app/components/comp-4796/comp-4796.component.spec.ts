/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4796Component } from './comp-4796.component';

describe('Comp4796Component', () => {
  let component: Comp4796Component;
  let fixture: ComponentFixture<Comp4796Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4796Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4796Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
