/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4872Component } from './comp-4872.component';

describe('Comp4872Component', () => {
  let component: Comp4872Component;
  let fixture: ComponentFixture<Comp4872Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4872Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4872Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
