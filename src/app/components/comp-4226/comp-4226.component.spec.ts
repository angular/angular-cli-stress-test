/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4226Component } from './comp-4226.component';

describe('Comp4226Component', () => {
  let component: Comp4226Component;
  let fixture: ComponentFixture<Comp4226Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4226Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4226Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
