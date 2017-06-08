/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4517Component } from './comp-4517.component';

describe('Comp4517Component', () => {
  let component: Comp4517Component;
  let fixture: ComponentFixture<Comp4517Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4517Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4517Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
