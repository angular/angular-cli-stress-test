/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4280Component } from './comp-4280.component';

describe('Comp4280Component', () => {
  let component: Comp4280Component;
  let fixture: ComponentFixture<Comp4280Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4280Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4280Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
