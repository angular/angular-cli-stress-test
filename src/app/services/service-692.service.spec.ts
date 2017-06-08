/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { TestBed, inject } from '@angular/core/testing';

import { Service692Service } from './service-692.service';

describe('Service692Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Service692Service]
    });
  });

  it('should ...', inject([Service692Service], (service: Service692Service) => {
    expect(service).toBeTruthy();
  }));
});
