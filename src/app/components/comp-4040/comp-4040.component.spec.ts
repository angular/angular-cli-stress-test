/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4040Component } from './comp-4040.component';

describe('Comp4040Component', () => {
  let component: Comp4040Component;
  let fixture: ComponentFixture<Comp4040Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4040Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4040Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
