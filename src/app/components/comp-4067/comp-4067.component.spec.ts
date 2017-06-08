/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4067Component } from './comp-4067.component';

describe('Comp4067Component', () => {
  let component: Comp4067Component;
  let fixture: ComponentFixture<Comp4067Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4067Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4067Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
