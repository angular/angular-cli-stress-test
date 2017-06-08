/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp4856Component } from './comp-4856.component';

describe('Comp4856Component', () => {
  let component: Comp4856Component;
  let fixture: ComponentFixture<Comp4856Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp4856Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp4856Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
