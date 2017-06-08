/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4200Component } from './comp-4200.component';

describe('Comp4200Component', () => {
  let component: Comp4200Component;
  let fixture: ComponentFixture<Comp4200Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4200Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4200Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
