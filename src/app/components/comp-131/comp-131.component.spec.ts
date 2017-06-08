/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp131Component } from './comp-131.component';

describe('Comp131Component', () => {
  let component: Comp131Component;
  let fixture: ComponentFixture<Comp131Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp131Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp131Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
