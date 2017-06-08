/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4173Component } from './comp-4173.component';

describe('Comp4173Component', () => {
  let component: Comp4173Component;
  let fixture: ComponentFixture<Comp4173Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4173Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4173Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
