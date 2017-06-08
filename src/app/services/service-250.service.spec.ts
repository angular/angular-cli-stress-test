/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service250Service } from './service-250.service';

describe('Service250Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service250Service]
    });
  });

  it('should ...', inject([Service250Service], (service: Service250Service) => {
    expect(service).toBeTruthy();
  }));
});
