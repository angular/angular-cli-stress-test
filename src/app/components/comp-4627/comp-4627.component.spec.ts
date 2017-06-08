/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4627Component } from './comp-4627.component';

describe('Comp4627Component', () => {
  let component: Comp4627Component;
  let fixture: ComponentFixture<Comp4627Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4627Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4627Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
