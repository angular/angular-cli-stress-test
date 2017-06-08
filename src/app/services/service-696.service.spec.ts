/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service696Service } from './service-696.service';

describe('Service696Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service696Service]
    });
  });

  it('should ...', inject([Service696Service], (service: Service696Service) => {
    expect(service).toBeTruthy();
  }));
});
