/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4958Component } from './comp-4958.component';

describe('Comp4958Component', () => {
  let component: Comp4958Component;
  let fixture: ComponentFixture<Comp4958Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4958Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4958Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
