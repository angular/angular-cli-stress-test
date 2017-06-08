/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Comp913Component } from './comp-913.component';

describe('Comp913Component', () => {
  let component: Comp913Component;
  let fixture: ComponentFixture<Comp913Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Comp913Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Comp913Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
