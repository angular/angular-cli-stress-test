/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4813Component } from './comp-4813.component';

describe('Comp4813Component', () => {
  let component: Comp4813Component;
  let fixture: ComponentFixture<Comp4813Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4813Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4813Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
