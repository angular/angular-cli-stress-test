/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4381Component } from './comp-4381.component';

describe('Comp4381Component', () => {
  let component: Comp4381Component;
  let fixture: ComponentFixture<Comp4381Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4381Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4381Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
