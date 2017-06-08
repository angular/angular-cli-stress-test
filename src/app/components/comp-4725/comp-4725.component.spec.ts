/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4725Component } from './comp-4725.component';

describe('Comp4725Component', () => {
  let component: Comp4725Component;
  let fixture: ComponentFixture<Comp4725Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4725Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4725Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
